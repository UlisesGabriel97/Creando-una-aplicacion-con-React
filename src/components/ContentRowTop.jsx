import React from 'react'
import GenresList from './GenresList'
import LastMovie from './LastMovie'
import TotalActors from './TotalActors'
import TotalAwards from './TotalAwards'
import TotalMovies from './TotalMovies'

function ContentRowTop() {
  return (
    <div class="container-fluid">
					<div class="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					<div class="row">
						<TotalMovies />

						<TotalAwards />

						<TotalActors />
					</div>
	
					<div class="row">
						<LastMovie />

						<GenresList />
					</div>
				</div>
  )
}

export default ContentRowTop