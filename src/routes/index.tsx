import TopBar from '@/components/TopBar/index'
import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Page from '@/components/Page/index'
import { Containers } from './routes'

const RouterComp = ({ container, routeProps }: { container: any; routeProps: any }) => {
  return <container.comp {...routeProps} />
}
const Routes = () => {
  return (
    <Router>
      <Route
        render={() => (
          <Page>
            <TopBar />
            <Suspense fallback={<span />}>
              <Switch>
                {Containers.map(container => (
                  <Route
                    {...container}
                    key={container.name}
                    render={routeProps => <RouterComp container={container} routeProps={routeProps} />}
                  />
                ))}
                <Redirect from="*" to="/404" />
              </Switch>
            </Suspense>
          </Page>
        )}
      ></Route>
    </Router>
  )
}

export default Routes
