import { Card, Grid, makeStyles } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { CommonButton } from './CommonButton'
import { CommonTextField } from './CommonTextField'
import { CopyToClipboard } from 'react-copy-to-clipboard'
// import { cloneObjectOrArray } from 'src/helper/cloneObjectOrArray'
import { fetchShortenUrl } from 'src/helper/fetchShortenUrl'
import { HomeProps } from 'src/pages'

export const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '5px',
    boxShadow: '0px 7px 25px 7px rgba(0,0,0,0.05)',
    padding: '2rem',
    [theme.breakpoints.up('sm')]: {
      padding: '4rem',
      backgroundSize: 'cover',
      background: `url("images/bg-shorten-desktop.svg") no-repeat`,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'cover',
      background: `url("images/bg-shorten-mobile.svg") no-repeat`,
    },
  },
  paper: {
    borderRadius: '5px',
    backgroundColor: theme.palette.primary.dark,
  },
  formContainer: {},

  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      maxHeight: '54px',
    },
    '& .MuiInputBase-root': {
      background: theme.palette.common.white,
    },
    '& .MuiFormLabel-root.Mui-focused': {
      // color: theme.palette.primary.dark
    },
  },
  shortlinkContainer: {
    marginTop: '2rem',
    '& .single': {
      borderRadius: '5px',
      boxShadow: '0px 7px 25px 7px rgba(0,0,0,0.05)',
      margin: '0.75rem 0',
      padding: '1rem',
      '& .longlink': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      '& .shortlink': {
        textAlign: 'right',
        [theme.breakpoints.down('xs')]: {
          borderTop: '1px solid #e0e0e0',
          textAlign: 'left',
        },
        color: theme.palette.primary.main,
      },
      '& .copy-button': {
        [theme.breakpoints.up('sm')]: {
          maxWidth: '130px',
        },
      },
    },
  },
  buttonCopy: {
    padding: '0.5rem 2rem !important',
    fontSize: '.875rem',
  },
  buttonCopied: {
    padding: '0.5rem 2rem !important',
    fontSize: '.875rem',
    backgroundColor: `${theme.palette.primary.dark} !important`,
  },
}))
// export interface IURLShortningComponentProps {}

export const URLShortningComponent: React.FC<HomeProps> = (props) => {
  const classes = useStyles()
  const { links } = props

  // const initialShortLinks = [
  //   {
  //     id: 1,
  //     longLink:
  //       'https://www.google.com/search?client=firefox-b-d&ei=nhIxYOfOM-aQ4-EPm7Ww2Ac&q=material+react+circle+icon+ui&oq=material+react+circle+icon+ui&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsAM6BAgAEBM6CggAEAgQBxAeEBM6CAgAEA0QHhATOgoIABAIEA0QHhATOgYIABAIEB5QrgxYzidgoiloAnABeACAAcgCiAHeFJIBBzAuNi42LjGYAQCgAQGqAQdnd3Mtd2l6yAECwAEB&sclient=gws-wiz&ved=0ahUKEwjnlYHTzPjuAhVmyDgGHZsaDHsQ4dUDCAw&uact=5',
  //     shortLink: 'https://goo.gl/efjfkj',
  //     copied: false,
  //   },
  //   {
  //     id: 2,
  //     longLink: 'https://google.com',
  //     shortLink: 'https://goo.gl/HJeijd',
  //     copied: false,
  //   },
  // ]
  // const [shortLinks, setShortLinks] = useState(initialShortLinks)

  // const handleCopyClick = (id: number) => {
  //   const links = cloneObjectOrArray(shortLinks)
  //   const index = links.findIndex((singleLink: any) => singleLink.id === id)
  //   if (index < 0) {
  //     console.log(index)
  //   } else {
  //     links[index].copied = true
  //     setShortLinks(links)
  //   }
  // }

  const [longUrl, setLongUrl] = useState<string>('')
  const [actionButtonText, setActionButtonText] = useState<string>(
    'Shorten It!'
  )
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null
  )

  const [errorText, setErrorText] = useState<string | undefined>('')

  const handleValueChange = (value: string) => {
    setLongUrl(value)
    setErrorText('')
  }

  const handleOnCopyClick = (index: number) => {
    setActiveButtonIndex(index)
    props.actionShowSnackbar({
      message: 'Link is copied to your clipboard',
      type: 'SUCESS',
    })
  }

  // useEffect(() => {
  //     if (!longUrl && longUrl == '') {
  //         setErrorText('Please add a link')
  //     } else {
  //         setErrorText('')

  //     }
  // }, [longUrl])
  const validateForm = () => {
    if (!longUrl && longUrl == '') {
      setErrorText('Please add a link')
      return
    }

    processDataFromAPI(longUrl)
  }

  const processDataFromAPI = (url: string) => {
    setActionButtonText('Shortning...')
    fetchShortenUrl(url)
      .then((response) => {
        if (response && response.ok) {
          props.actionAddLinkToList({
            original_link: response.result.original_link,
            short_link: response.result.short_link,
          })

          setLongUrl('')
        } else if (response && !response.ok) {
          setErrorText(response.error ?? 'Something went wrong')
        }
      })
      .then(() => setActionButtonText('Shorten It!'))
  }
  return (
    <Fragment>
      <div className={classes.paper}>
        <Card elevation={0} className={classes.root}>
          <form onSubmit={() => validateForm()}>
            <Grid
              container
              spacing={3}
              // justify="space-between"
              // alignItems="center"
              // alignContent="center"
              className={classes.formContainer}
            >
              <Grid item xs={12} sm={8} md={9}>
                <CommonTextField
                  value={longUrl}
                  required
                  className={classes.textField}
                  label="Shorten a link here.."
                  error={Boolean(errorText)}
                  errorText={errorText}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    handleValueChange(e.currentTarget.value)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <CommonButton
                  borderRadius="small"
                  fullWidth
                  onClick={validateForm}
                >
                  {actionButtonText ?? 'Shorten It!'}
                </CommonButton>
              </Grid>
            </Grid>
          </form>
        </Card>
      </div>
      <div className={classes.shortlinkContainer}>
        {links?.list?.map((item, index) => {
          return (
            <Card key={index} elevation={0} className={'single'}>
              <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={3}
              >
                <Grid className={'longlink'} item xs={12} sm={6} md={7}>
                  {item.original_link}
                </Grid>
                <Grid className={'shortlink'} item xs={12} sm={3} md={3}>
                  {item.short_link}
                </Grid>
                <Grid className={'copy-button'} item xs={12} sm={3} md={2}>
                  <CopyToClipboard
                    text={item.short_link}
                    onCopy={() => handleOnCopyClick(index)}
                  >
                    <CommonButton
                      // className={classes.buttonCopy}
                      className={
                        index == activeButtonIndex
                          ? classes.buttonCopied
                          : classes.buttonCopy
                      }
                      borderRadius="small"
                      onClick={() => console.log('copy button was clicked')}
                      fullWidth
                    >
                      {index == activeButtonIndex ? 'Copied' : 'Copy'}
                    </CommonButton>
                  </CopyToClipboard>
                </Grid>
              </Grid>
            </Card>
          )
        })}
      </div>
    </Fragment>
  )
}
