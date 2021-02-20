import { FC, Fragment } from 'react'

export const GridLayout: FC = ({ children }) => {
  return (
    <Fragment>
      <div className="container">{children}</div>
      {/* <style jsx>{`
        .container {
          padding: 0 1rem;
          margin: 0 auto;
        }

        @media only screen and (min-width: 1440px) {
          .container {
            max-width: 1120px;
          }
        }

        @media only screen and (min-width: 1920px) {
          .container {
            max-width: 1440px;
          }
        }
      `}</style> */}
    </Fragment>
  )
}
