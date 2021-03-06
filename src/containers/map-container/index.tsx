import { useColorModeValue } from '@chakra-ui/color-mode';
import { Flex } from '@chakra-ui/layout';
import GoogleMapReact from 'google-map-react';
import React from 'react';

import MapPopUp from '../../components/map-popup';
import { googleMapsKey } from '../../config';
import { jobItem } from '../../services/dto';
import { useHomeStore } from '../../stores/use-home-store';
import mapStyle from '../../theme/map-style';

type propType = {
  jobsList: jobItem[];
};

export default function MapContainer({ jobsList }: propType) {
  const location = useHomeStore((state) => state.mapCenter);
  const mapTheme = useColorModeValue(mapStyle.lightMap, mapStyle.darkMap);
  return (
    <Flex justify="center" h="100%">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsKey }}
        center={location}
        options={{
          styles: mapTheme,
        }}
        defaultCenter={{ lat: 10, lng: 10 }}
        defaultZoom={3}>
        {jobsList.map((job) => (
          <MapPopUp
            key={job.id}
            {...job}
            lat={Number.parseInt(job.latitude)}
            lng={Number.parseInt(job.longitude)}
          />
        ))}
      </GoogleMapReact>
    </Flex>
  );
}
