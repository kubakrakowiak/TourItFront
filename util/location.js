const GOOGLE_API_KEY = 'AIzaSyBoA0fJmB7BATExrJg305W45_0B9GNxBCI';

export function getMapPreview(lat, lng) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=1440x2560&maptype=roadmap&markers=color:red%7Clabel:S%7${lat},${lng}&key=${GOOGLE_API_KEY}`;
    return imagePreviewUrl;
}
