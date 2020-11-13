import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/resume/digital" page={LifeGraphPage} name="lifeGraph" />
      <Route path="/resume" page={ResumePage} name="resume" />
      <Route path="/posts/{slug}" page={PostPage} name="post" />
      <Route path="/category/{slug}" page={CategoryPage} name="category" />
      <Route path="/{slug}" page={PagePage} name="page" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
