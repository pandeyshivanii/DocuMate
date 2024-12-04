
import { Suspense } from 'react'
import Loading from './Loading'
import ErrorFallback from './ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'


function LazyLoadHandler({ children, errorFallback, suspenceFallback }) {
     return (
          <ErrorBoundary FallbackComponent={errorFallback ?? ErrorFallback} onReset={() => { window.location.reload() }}>
               <Suspense fallback={suspenceFallback ?? <Loading />}>
                    {children}
               </Suspense>
          </ErrorBoundary>
     )
}

export default LazyLoadHandler