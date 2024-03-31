import { Route, Router } from 'electron-router-dom'

import { Default } from './pages/_layouts/default'
import { Blank } from './pages/blank'
import { Document } from './pages/document'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/document" element={<Document />} />
        </Route>
      }
    />
  )
}