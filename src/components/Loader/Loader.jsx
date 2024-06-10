import { Audio } from 'react-loader-spinner';
export default function Loader(){
    const loaderStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', 
    };
    return(
        <div style={loaderStyle}>
        
        <Audio
  height="40"
  width="40"
          radius="8"
          
          
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
<p>Loading data, please wait...</p>
        </div>

    )
}