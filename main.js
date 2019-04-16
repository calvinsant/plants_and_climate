fetch("https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets", {
  headers: new Headers({
    token: "NBRlUCtUraLzsKnnYBfccXRzGcwqUjoB"
  })
})
  .then(response => response.json())
  .then(data => { console.log(data); })
  .catch(error => console.error(error));