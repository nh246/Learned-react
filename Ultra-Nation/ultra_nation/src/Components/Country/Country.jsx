
function Country(props) {
  const {region,flags,name} = props.country;
    // console.log(props)

    const flagStyle={
      height:'50px',

    }

    const handeleAddedCountry = props.handleCountry
  return (
    <div style={props.style}>
    <h3>Country name: {name.common}</h3>
    <h5>Region: {region}</h5>
    <img style={flagStyle} src={flags.png} alt={name.common}  />
    <button onClick={()=>handeleAddedCountry(props.country)}>add country</button>
    </div>
  )
}

export default Country