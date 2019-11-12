require('dplyr')
require('sf')

query = paste0("https://data.cambridgema.gov/resource/2z9k-mv9g.csv?$where=",
  "ticket_created_date_time>'2019-06-01T12:00:00'", 
  "&" , 
  "issue_type=Bike%20Lane%20Obstruction"
)

read.csv(query, stringsAsFactors = FALSE) %>%
  st_as_sf(coords =  c('lng', 'lat')) %>%
  rename(created = ticket_created_date_time) %>%
  select(c('ticket_id', 'ticket_status', 'created', 'address', 'geometry')) %>%
  st_write('obs_bike_lanes.geojson')
