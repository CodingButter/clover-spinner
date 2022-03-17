const degreesToRadians = (degrees) => degrees * (Math.PI / 180);
const radiansToDegrees = (rads) => rads * (180 / Math.PI);
const angleDelta = (count) => 360 / count;
const angleByOffset = (angleDelta, offset) => angleDelta * offset;
const findRadius = (count, height) => {
  const angleBetween = angleDelta(count);
  return height / Math.tan(degreesToRadians(angleBetween));
};

const Trig = {
  degreesToRadians,
  angleDelta,
  findRadius,
  angleByOffset,
  radiansToDegrees,
};

export default Trig;
