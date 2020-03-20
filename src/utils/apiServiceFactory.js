export default (httpClient, {baseUrl}) => {
  const POI_BY_USER_ENDPOINT = '/users/{uid}/point_of_interests';
  const NEARBY_USERS_BY_USER_ENDPOINT = '/users/{uid}/nearby_users?max_distance={max_dist}';
  const POI_BY_MAP_ENDPOINT = '/map_center/point_of_interests?max_distance={max_dist}&map_center_lat={lat}&map_center_lng={lng}';

  return {
    getPoiByUserId(userId) {
      const endpoint = POI_BY_USER_ENDPOINT.replace('{uid}', userId);
      return httpClient.get(baseUrl + endpoint);
    },

    getNearbyUsersByUserId(userId, maxDistance = 170) {
      const endpoint = NEARBY_USERS_BY_USER_ENDPOINT.replace('{uid}', userId).replace('{max_dist}', maxDistance);
      return httpClient.get(baseUrl + endpoint);
    },

    getPoiByMapCenter({lat, lng}, maxDistance = 170) {
      const endpoint = POI_BY_MAP_ENDPOINT
        .replace('{max_dist}', maxDistance)
        .replace('{lat}', lat)
        .replace('{lng}', lng);

      return httpClient.get(baseUrl + endpoint);
    },
  }
}


