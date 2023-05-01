import { YMaps, Map,Placemark, FullscreenControl, GeolocationControl } from '@pbe/react-yandex-maps';

const SimpleMap = () => (
  <YMaps>
  <div className="container">
    <form className='mapPlace' >
  <Map
    defaultState={{
      center: [41.196761, 69.158288],
      center: [41.198371, 69.155914],
      center: [41.197760, 69.155842],
      center: [41.198557, 69.158356],
      center: [41.198676, 69.156367],
      center: [41.198874, 69.158407],
      zoom: 15,
    }}
  >
    <Placemark geometry={[41.196761, 69.158288]} />
    <Placemark geometry={[41.198371, 69.155914]} />
    <Placemark geometry={[41.198874, 69.158407]} />
    <Placemark geometry={[41.197760, 69.155842]} />
    <Placemark geometry={[41.198676, 69.156367]} />
    <Placemark geometry={[41.198557, 69.158356]} />
    <FullscreenControl options={{float: 'left'}} />
    <GeolocationControl options={{float: 'right'}} />
    

  </Map>
  </form>
  </div>
</YMaps>
);

export default SimpleMap;
