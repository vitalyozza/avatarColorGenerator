import { User, AvatarStyles } from '$lib/interfaces';

const baseColors = [
    // primary       
    // 'oklch(95.0% 0.10 0.0)',	/* aztec-warrior-5 */
    // 'oklch(85.6% 0.10 0.0)',	/* aztec-warrior-14 */
    'oklch(76.1% 0.10 0.0)',	/* aztec-warrior-24 */
    // 'oklch(66.7% 0.12 0.0)',	/* aztec-warrior-33 */
    // 'oklch(57.2% 0.16 0.0)',	/* aztec-warrior-43 */
    // 'oklch(47.8% 0.20 0.0)',	/* aztec-warrior-52 */
    // 'oklch(38.3% 0.16 0.0)',	/* aztec-warrior-62 */
    // 'oklch(28.9% 0.12 0.0)',	/* aztec-warrior-71 */
    // 'oklch(19.4% 0.10 0.0)',	/* aztec-warrior-81 */
    // 'oklch(10.0% 0.10 0.0)',	/* aztec-warrior-90 */
    // 'oklch(95.0% 0.10 10.0)',	/* red-paracentrotus-5 */
    // 'oklch(85.6% 0.10 10.0)',	/* red-paracentrotus-14 */
    'oklch(76.1% 0.10 10.0)',	/* red-paracentrotus-24 */
    // 'oklch(66.7% 0.12 10.0)',	/* red-paracentrotus-33 */
    // 'oklch(57.2% 0.16 10.0)',	/* red-paracentrotus-43 */
    // 'oklch(47.8% 0.20 10.0)',	/* red-paracentrotus-52 */
    // 'oklch(38.3% 0.16 10.0)',	/* red-paracentrotus-62 */
    // 'oklch(28.9% 0.12 10.0)',	/* red-paracentrotus-71 */
    // 'oklch(19.4% 0.10 10.0)',	/* red-paracentrotus-81 */
    // 'oklch(10.0% 0.10 10.0)',	/* red-paracentrotus-90 */
    // 'oklch(95.0% 0.10 21.0)',	/* red-dead-redemption-5 */
    // 'oklch(85.6% 0.10 21.0)',	/* red-dead-redemption-14 */
    'oklch(76.1% 0.10 21.0)',	/* red-dead-redemption-24 */
    // 'oklch(66.7% 0.12 21.0)',	/* red-dead-redemption-33 */
    // 'oklch(57.2% 0.16 21.0)',	/* red-dead-redemption-43 */
    // 'oklch(47.8% 0.20 21.0)',	/* red-dead-redemption-52 */
    // 'oklch(38.3% 0.16 21.0)',	/* red-dead-redemption-62 */
    // 'oklch(28.9% 0.12 21.0)',	/* red-dead-redemption-71 */
    // 'oklch(19.4% 0.10 21.0)',	/* red-dead-redemption-81 */
    // 'oklch(10.0% 0.10 21.0)',	/* red-dead-redemption-90 */
    // 'oklch(95.0% 0.10 31.0)',	/* red-prayer-flag-5 */
    // 'oklch(85.6% 0.10 31.0)',	/* red-prayer-flag-14 */
    'oklch(76.1% 0.10 31.0)',	/* red-prayer-flag-24 */
    // 'oklch(66.7% 0.12 31.0)',	/* red-prayer-flag-33 */
    // 'oklch(57.2% 0.16 31.0)',	/* red-prayer-flag-43 */
    // 'oklch(47.8% 0.20 31.0)',	/* red-prayer-flag-52 */
    // 'oklch(38.3% 0.16 31.0)',	/* red-prayer-flag-62 */
    // 'oklch(28.9% 0.12 31.0)',	/* red-prayer-flag-71 */
    // 'oklch(19.4% 0.10 31.0)',	/* red-prayer-flag-81 */
    // 'oklch(10.0% 0.10 31.0)',	/* red-prayer-flag-90 */
    // 'oklch(95.0% 0.10 41.0)',	/* ravishing-rouge-5 */
    // 'oklch(85.6% 0.10 41.0)',	/* ravishing-rouge-14 */
    'oklch(76.1% 0.10 41.0)',	/* ravishing-rouge-24 */
    // 'oklch(66.7% 0.12 41.0)',	/* ravishing-rouge-33 */
    // 'oklch(57.2% 0.16 41.0)',	/* ravishing-rouge-43 */
    // 'oklch(47.8% 0.20 41.0)',	/* ravishing-rouge-52 */
    // 'oklch(38.3% 0.16 41.0)',	/* ravishing-rouge-62 */
    // 'oklch(28.9% 0.12 41.0)',	/* ravishing-rouge-71 */
    // 'oklch(19.4% 0.10 41.0)',	/* ravishing-rouge-81 */
    // 'oklch(10.0% 0.10 41.0)',	/* ravishing-rouge-90 */
    // 'oklch(95.0% 0.10 51.0)',	/* crimson-velvet-sunset-5 */
    // 'oklch(85.6% 0.10 51.0)',	/* crimson-velvet-sunset-14 */
    'oklch(76.1% 0.10 51.0)',	/* crimson-velvet-sunset-24 */
    // 'oklch(66.7% 0.12 51.0)',	/* crimson-velvet-sunset-33 */
    // 'oklch(57.2% 0.16 51.0)',	/* crimson-velvet-sunset-43 */
    // 'oklch(47.8% 0.20 51.0)',	/* crimson-velvet-sunset-52 */
    // 'oklch(38.3% 0.16 51.0)',	/* crimson-velvet-sunset-62 */
    // 'oklch(28.9% 0.12 51.0)',	/* crimson-velvet-sunset-71 */
    // 'oklch(19.4% 0.10 51.0)',	/* crimson-velvet-sunset-81 */
    // 'oklch(10.0% 0.10 51.0)',	/* crimson-velvet-sunset-90 */
    // 'oklch(95.0% 0.10 62.0)',	/* burnt-sienna-5 */
    // 'oklch(85.6% 0.10 62.0)',	/* burnt-sienna-14 */
    'oklch(76.1% 0.10 62.0)',	/* burnt-sienna-24 */
    // 'oklch(66.7% 0.12 62.0)',	/* burnt-sienna-33 */
    // 'oklch(57.2% 0.16 62.0)',	/* burnt-sienna-43 */
    // 'oklch(47.8% 0.20 62.0)',	/* burnt-sienna-52 */
    // 'oklch(38.3% 0.16 62.0)',	/* burnt-sienna-62 */
    // 'oklch(28.9% 0.12 62.0)',	/* burnt-sienna-71 */
    // 'oklch(19.4% 0.10 62.0)',	/* burnt-sienna-81 */
    // 'oklch(10.0% 0.10 62.0)',	/* burnt-sienna-90 */
    // 'oklch(95.0% 0.10 72.0)',	/* pepperoni-5 */
    // 'oklch(85.6% 0.10 72.0)',	/* pepperoni-14 */
    'oklch(76.1% 0.10 72.0)',	/* pepperoni-24 */
    // 'oklch(66.7% 0.12 72.0)',	/* pepperoni-33 */
    // 'oklch(57.2% 0.16 72.0)',	/* pepperoni-43 */
    // 'oklch(47.8% 0.20 72.0)',	/* pepperoni-52 */
    // 'oklch(38.3% 0.16 72.0)',	/* pepperoni-62 */
    // 'oklch(28.9% 0.12 72.0)',	/* pepperoni-71 */
    // 'oklch(19.4% 0.10 72.0)',	/* pepperoni-81 */
    // 'oklch(10.0% 0.10 72.0)',	/* pepperoni-90 */
    // 'oklch(95.0% 0.10 82.0)',	/* warm-brown-5 */
    // 'oklch(85.6% 0.10 82.0)',	/* warm-brown-14 */
    'oklch(76.1% 0.10 82.0)',	/* warm-brown-24 */
    // 'oklch(66.7% 0.12 82.0)',	/* warm-brown-33 */
    // 'oklch(57.2% 0.16 82.0)',	/* warm-brown-43 */
    // 'oklch(47.8% 0.20 82.0)',	/* warm-brown-52 */
    // 'oklch(38.3% 0.16 82.0)',	/* warm-brown-62 */
    // 'oklch(28.9% 0.12 82.0)',	/* warm-brown-71 */
    // 'oklch(19.4% 0.10 82.0)',	/* warm-brown-81 */
    // 'oklch(10.0% 0.10 82.0)',	/* warm-brown-90 */
    // 'oklch(95.0% 0.10 93.0)',	/* spear-shaft-5 */
    // 'oklch(85.6% 0.10 93.0)',	/* spear-shaft-14 */
    'oklch(76.1% 0.10 93.0)',	/* spear-shaft-24 */
    // 'oklch(66.7% 0.12 93.0)',	/* spear-shaft-33 */
    // 'oklch(57.2% 0.16 93.0)',	/* spear-shaft-43 */
    // 'oklch(47.8% 0.20 93.0)',	/* spear-shaft-52 */
    // 'oklch(38.3% 0.16 93.0)',	/* spear-shaft-62 */
    // 'oklch(28.9% 0.12 93.0)',	/* spear-shaft-71 */
    // 'oklch(19.4% 0.10 93.0)',	/* spear-shaft-81 */
    // 'oklch(10.0% 0.10 93.0)',	/* spear-shaft-90 */
    // 'oklch(95.0% 0.10 103.0)',	/* ground-earth-5 */
    // 'oklch(85.6% 0.10 103.0)',	/* ground-earth-14 */
    'oklch(76.1% 0.10 103.0)',	/* ground-earth-24 */
    // 'oklch(66.7% 0.12 103.0)',	/* ground-earth-33 */
    // 'oklch(57.2% 0.16 103.0)',	/* ground-earth-43 */
    // 'oklch(47.8% 0.20 103.0)',	/* ground-earth-52 */
    // 'oklch(38.3% 0.16 103.0)',	/* ground-earth-62 */
    // 'oklch(28.9% 0.12 103.0)',	/* ground-earth-71 */
    // 'oklch(19.4% 0.10 103.0)',	/* ground-earth-81 */
    // 'oklch(10.0% 0.10 103.0)',	/* ground-earth-90 */
    // 'oklch(95.0% 0.10 113.0)',	/* earthy-khaki-green-5 */
    // 'oklch(85.6% 0.10 113.0)',	/* earthy-khaki-green-14 */
    'oklch(76.1% 0.10 113.0)',	/* earthy-khaki-green-24 */
    // 'oklch(66.7% 0.12 113.0)',	/* earthy-khaki-green-33 */
    // 'oklch(57.2% 0.16 113.0)',	/* earthy-khaki-green-43 */
    // 'oklch(47.8% 0.20 113.0)',	/* earthy-khaki-green-52 */
    // 'oklch(38.3% 0.16 113.0)',	/* earthy-khaki-green-62 */
    // 'oklch(28.9% 0.12 113.0)',	/* earthy-khaki-green-71 */
    // 'oklch(19.4% 0.10 113.0)',	/* earthy-khaki-green-81 */
    // 'oklch(10.0% 0.10 113.0)',	/* earthy-khaki-green-90 */
    // 'oklch(95.0% 0.10 123.0)',	/* over-the-hills-5 */
    // 'oklch(85.6% 0.10 123.0)',	/* over-the-hills-14 */
    'oklch(76.1% 0.10 123.0)',	/* over-the-hills-24 */
    // 'oklch(66.7% 0.12 123.0)',	/* over-the-hills-33 */
    // 'oklch(57.2% 0.16 123.0)',	/* over-the-hills-43 */
    // 'oklch(47.8% 0.20 123.0)',	/* over-the-hills-52 */
    // 'oklch(38.3% 0.16 123.0)',	/* over-the-hills-62 */
    // 'oklch(28.9% 0.12 123.0)',	/* over-the-hills-71 */
    // 'oklch(19.4% 0.10 123.0)',	/* over-the-hills-81 */
    // 'oklch(10.0% 0.10 123.0)',	/* over-the-hills-90 */
    // 'oklch(95.0% 0.10 134.0)',	/* botanical-beauty-5 */
    // 'oklch(85.6% 0.10 134.0)',	/* botanical-beauty-14 */
    'oklch(76.1% 0.10 134.0)',	/* botanical-beauty-24 */
    // 'oklch(66.7% 0.12 134.0)',	/* botanical-beauty-33 */
    // 'oklch(57.2% 0.16 134.0)',	/* botanical-beauty-43 */
    // 'oklch(47.8% 0.20 134.0)',	/* botanical-beauty-52 */
    // 'oklch(38.3% 0.16 134.0)',	/* botanical-beauty-62 */
    // 'oklch(28.9% 0.12 134.0)',	/* botanical-beauty-71 */
    // 'oklch(19.4% 0.10 134.0)',	/* botanical-beauty-81 */
    // 'oklch(10.0% 0.10 134.0)',	/* botanical-beauty-90 */
    // 'oklch(95.0% 0.10 144.0)',	/* hulk-5 */
    // 'oklch(85.6% 0.10 144.0)',	/* hulk-14 */
    'oklch(76.1% 0.10 144.0)',	/* hulk-24 */
    // 'oklch(66.7% 0.12 144.0)',	/* hulk-33 */
    // 'oklch(57.2% 0.16 144.0)',	/* hulk-43 */
    // 'oklch(47.8% 0.20 144.0)',	/* hulk-52 */
    // 'oklch(38.3% 0.16 144.0)',	/* hulk-62 */
    // 'oklch(28.9% 0.12 144.0)',	/* hulk-71 */
    // 'oklch(19.4% 0.10 144.0)',	/* hulk-81 */
    // 'oklch(10.0% 0.10 144.0)',	/* hulk-90 */
    // 'oklch(95.0% 0.10 154.0)',	/* azure-radiance-5 */
    // 'oklch(85.6% 0.10 154.0)',	/* azure-radiance-14 */
    'oklch(76.1% 0.10 154.0)',	/* azure-radiance-24 */
    // 'oklch(66.7% 0.12 154.0)',	/* azure-radiance-33 */
    // 'oklch(57.2% 0.16 154.0)',	/* azure-radiance-43 */
    // 'oklch(47.8% 0.20 154.0)',	/* azure-radiance-52 */
    // 'oklch(38.3% 0.16 154.0)',	/* azure-radiance-62 */
    // 'oklch(28.9% 0.12 154.0)',	/* azure-radiance-71 */
    // 'oklch(19.4% 0.10 154.0)',	/* azure-radiance-81 */
    // 'oklch(10.0% 0.10 154.0)',	/* azure-radiance-90 */
    // 'oklch(95.0% 0.10 165.0)',	/* philippine-green-5 */
    // 'oklch(85.6% 0.10 165.0)',	/* philippine-green-14 */
    'oklch(76.1% 0.10 165.0)',	/* philippine-green-24 */
    // 'oklch(66.7% 0.12 165.0)',	/* philippine-green-33 */
    // 'oklch(57.2% 0.16 165.0)',	/* philippine-green-43 */
    // 'oklch(47.8% 0.20 165.0)',	/* philippine-green-52 */
    // 'oklch(38.3% 0.16 165.0)',	/* philippine-green-62 */
    // 'oklch(28.9% 0.12 165.0)',	/* philippine-green-71 */
    // 'oklch(19.4% 0.10 165.0)',	/* philippine-green-81 */
    // 'oklch(10.0% 0.10 165.0)',	/* philippine-green-90 */
    // 'oklch(95.0% 0.10 175.0)',	/* spanish-viridian-5 */
    // 'oklch(85.6% 0.10 175.0)',	/* spanish-viridian-14 */
    'oklch(76.1% 0.10 175.0)',	/* spanish-viridian-24 */
    // 'oklch(66.7% 0.12 175.0)',	/* spanish-viridian-33 */
    // 'oklch(57.2% 0.16 175.0)',	/* spanish-viridian-43 */
    // 'oklch(47.8% 0.20 175.0)',	/* spanish-viridian-52 */
    // 'oklch(38.3% 0.16 175.0)',	/* spanish-viridian-62 */
    // 'oklch(28.9% 0.12 175.0)',	/* spanish-viridian-71 */
    // 'oklch(19.4% 0.10 175.0)',	/* spanish-viridian-81 */
    // 'oklch(10.0% 0.10 175.0)',	/* spanish-viridian-90 */
    // 'oklch(95.0% 0.10 185.0)',	/* summer-turquoise-5 */
    // 'oklch(85.6% 0.10 185.0)',	/* summer-turquoise-14 */
    'oklch(76.1% 0.10 185.0)',	/* summer-turquoise-24 */
    // 'oklch(66.7% 0.12 185.0)',	/* summer-turquoise-33 */
    // 'oklch(57.2% 0.16 185.0)',	/* summer-turquoise-43 */
    // 'oklch(47.8% 0.20 185.0)',	/* summer-turquoise-52 */
    // 'oklch(38.3% 0.16 185.0)',	/* summer-turquoise-62 */
    // 'oklch(28.9% 0.12 185.0)',	/* summer-turquoise-71 */
    // 'oklch(19.4% 0.10 185.0)',	/* summer-turquoise-81 */
    // 'oklch(10.0% 0.10 185.0)',	/* summer-turquoise-90 */
    // 'oklch(95.0% 0.10 195.0)',	/* go-alpha-5 */
    // 'oklch(85.6% 0.10 195.0)',	/* go-alpha-14 */
    'oklch(76.1% 0.10 195.0)',	/* go-alpha-24 */
    // 'oklch(66.7% 0.12 195.0)',	/* go-alpha-33 */
    // 'oklch(57.2% 0.16 195.0)',	/* go-alpha-43 */
    // 'oklch(47.8% 0.20 195.0)',	/* go-alpha-52 */
    // 'oklch(38.3% 0.16 195.0)',	/* go-alpha-62 */
    // 'oklch(28.9% 0.12 195.0)',	/* go-alpha-71 */
    // 'oklch(19.4% 0.10 195.0)',	/* go-alpha-81 */
    // 'oklch(10.0% 0.10 195.0)',	/* go-alpha-90 */
    // 'oklch(95.0% 0.10 206.0)',	/* sea-sight-5 */
    // 'oklch(85.6% 0.10 206.0)',	/* sea-sight-14 */
    'oklch(76.1% 0.10 206.0)',	/* sea-sight-24 */
    // 'oklch(66.7% 0.12 206.0)',	/* sea-sight-33 */
    // 'oklch(57.2% 0.16 206.0)',	/* sea-sight-43 */
    // 'oklch(47.8% 0.20 206.0)',	/* sea-sight-52 */
    // 'oklch(38.3% 0.16 206.0)',	/* sea-sight-62 */
    // 'oklch(28.9% 0.12 206.0)',	/* sea-sight-71 */
    // 'oklch(19.4% 0.10 206.0)',	/* sea-sight-81 */
    // 'oklch(10.0% 0.10 206.0)',	/* sea-sight-90 */
    // 'oklch(95.0% 0.10 216.0)',	/* deluge-5 */
    // 'oklch(85.6% 0.10 216.0)',	/* deluge-14 */
    'oklch(76.1% 0.10 216.0)',	/* deluge-24 */
    // 'oklch(66.7% 0.12 216.0)',	/* deluge-33 */
    // 'oklch(57.2% 0.16 216.0)',	/* deluge-43 */
    // 'oklch(47.8% 0.20 216.0)',	/* deluge-52 */
    // 'oklch(38.3% 0.16 216.0)',	/* deluge-62 */
    // 'oklch(28.9% 0.12 216.0)',	/* deluge-71 */
    // 'oklch(19.4% 0.10 216.0)',	/* deluge-81 */
    // 'oklch(10.0% 0.10 216.0)',	/* deluge-90 */
    // 'oklch(95.0% 0.10 226.0)',	/* spanish-blue-5 */
    // 'oklch(85.6% 0.10 226.0)',	/* spanish-blue-14 */
    'oklch(76.1% 0.10 226.0)',	/* spanish-blue-24 */
    // 'oklch(66.7% 0.12 226.0)',	/* spanish-blue-33 */
    // 'oklch(57.2% 0.16 226.0)',	/* spanish-blue-43 */
    // 'oklch(47.8% 0.20 226.0)',	/* spanish-blue-52 */
    // 'oklch(38.3% 0.16 226.0)',	/* spanish-blue-62 */
    // 'oklch(28.9% 0.12 226.0)',	/* spanish-blue-71 */
    // 'oklch(19.4% 0.10 226.0)',	/* spanish-blue-81 */
    // 'oklch(10.0% 0.10 226.0)',	/* spanish-blue-90 */
    // 'oklch(95.0% 0.10 237.0)',	/* indigo-carmine-5 */
    // 'oklch(85.6% 0.10 237.0)',	/* indigo-carmine-14 */
    'oklch(76.1% 0.10 237.0)',	/* indigo-carmine-24 */
    // 'oklch(66.7% 0.12 237.0)',	/* indigo-carmine-33 */
    // 'oklch(57.2% 0.16 237.0)',	/* indigo-carmine-43 */
    // 'oklch(47.8% 0.20 237.0)',	/* indigo-carmine-52 */
    // 'oklch(38.3% 0.16 237.0)',	/* indigo-carmine-62 */
    // 'oklch(28.9% 0.12 237.0)',	/* indigo-carmine-71 */
    // 'oklch(19.4% 0.10 237.0)',	/* indigo-carmine-81 */
    // 'oklch(10.0% 0.10 237.0)',	/* indigo-carmine-90 */
    // 'oklch(95.0% 0.10 247.0)',	/* royal-navy-blue-5 */
    // 'oklch(85.6% 0.10 247.0)',	/* royal-navy-blue-14 */
    'oklch(76.1% 0.10 247.0)',	/* royal-navy-blue-24 */
    // 'oklch(66.7% 0.12 247.0)',	/* royal-navy-blue-33 */
    // 'oklch(57.2% 0.16 247.0)',	/* royal-navy-blue-43 */
    // 'oklch(47.8% 0.20 247.0)',	/* royal-navy-blue-52 */
    // 'oklch(38.3% 0.16 247.0)',	/* royal-navy-blue-62 */
    // 'oklch(28.9% 0.12 247.0)',	/* royal-navy-blue-71 */
    // 'oklch(19.4% 0.10 247.0)',	/* royal-navy-blue-81 */
    // 'oklch(10.0% 0.10 247.0)',	/* royal-navy-blue-90 */
    // 'oklch(95.0% 0.10 257.0)',	/* dead-blue-eyes-5 */
    // 'oklch(85.6% 0.10 257.0)',	/* dead-blue-eyes-14 */
    'oklch(76.1% 0.10 257.0)',	/* dead-blue-eyes-24 */
    // 'oklch(66.7% 0.12 257.0)',	/* dead-blue-eyes-33 */
    // 'oklch(57.2% 0.16 257.0)',	/* dead-blue-eyes-43 */
    // 'oklch(47.8% 0.20 257.0)',	/* dead-blue-eyes-52 */
    // 'oklch(38.3% 0.16 257.0)',	/* dead-blue-eyes-62 */
    // 'oklch(28.9% 0.12 257.0)',	/* dead-blue-eyes-71 */
    // 'oklch(19.4% 0.10 257.0)',	/* dead-blue-eyes-81 */
    // 'oklch(10.0% 0.10 257.0)',	/* dead-blue-eyes-90 */
    // 'oklch(95.0% 0.10 267.0)',	/* gorgonzola-blue-5 */
    // 'oklch(85.6% 0.10 267.0)',	/* gorgonzola-blue-14 */
    'oklch(76.1% 0.10 267.0)',	/* gorgonzola-blue-24 */
    // 'oklch(66.7% 0.12 267.0)',	/* gorgonzola-blue-33 */
    // 'oklch(57.2% 0.16 267.0)',	/* gorgonzola-blue-43 */
    // 'oklch(47.8% 0.20 267.0)',	/* gorgonzola-blue-52 */
    // 'oklch(38.3% 0.16 267.0)',	/* gorgonzola-blue-62 */
    // 'oklch(28.9% 0.12 267.0)',	/* gorgonzola-blue-71 */
    // 'oklch(19.4% 0.10 267.0)',	/* gorgonzola-blue-81 */
    // 'oklch(10.0% 0.10 267.0)',	/* gorgonzola-blue-90 */
    // 'oklch(95.0% 0.10 278.0)',	/* iris-5 */
    // 'oklch(85.6% 0.10 278.0)',	/* iris-14 */
    'oklch(76.1% 0.10 278.0)',	/* iris-24 */
    // 'oklch(66.7% 0.12 278.0)',	/* iris-33 */
    // 'oklch(57.2% 0.16 278.0)',	/* iris-43 */
    // 'oklch(47.8% 0.20 278.0)',	/* iris-52 */
    // 'oklch(38.3% 0.16 278.0)',	/* iris-62 */
    // 'oklch(28.9% 0.12 278.0)',	/* iris-71 */
    // 'oklch(19.4% 0.10 278.0)',	/* iris-81 */
    // 'oklch(10.0% 0.10 278.0)',	/* iris-90 */
    // 'oklch(95.0% 0.10 288.0)',	/* dragonlord-purple-5 */
    // 'oklch(85.6% 0.10 288.0)',	/* dragonlord-purple-14 */
    'oklch(76.1% 0.10 288.0)',	/* dragonlord-purple-24 */
    // 'oklch(66.7% 0.12 288.0)',	/* dragonlord-purple-33 */
    // 'oklch(57.2% 0.16 288.0)',	/* dragonlord-purple-43 */
    // 'oklch(47.8% 0.20 288.0)',	/* dragonlord-purple-52 */
    // 'oklch(38.3% 0.16 288.0)',	/* dragonlord-purple-62 */
    // 'oklch(28.9% 0.12 288.0)',	/* dragonlord-purple-71 */
    // 'oklch(19.4% 0.10 288.0)',	/* dragonlord-purple-81 */
    // 'oklch(10.0% 0.10 288.0)',	/* dragonlord-purple-90 */
    // 'oklch(95.0% 0.10 298.0)',	/* purple-rain-5 */
    // 'oklch(85.6% 0.10 298.0)',	/* purple-rain-14 */
    'oklch(76.1% 0.10 298.0)',	/* purple-rain-24 */
    // 'oklch(66.7% 0.12 298.0)',	/* purple-rain-33 */
    // 'oklch(57.2% 0.16 298.0)',	/* purple-rain-43 */
    // 'oklch(47.8% 0.20 298.0)',	/* purple-rain-52 */
    // 'oklch(38.3% 0.16 298.0)',	/* purple-rain-62 */
    // 'oklch(28.9% 0.12 298.0)',	/* purple-rain-71 */
    // 'oklch(19.4% 0.10 298.0)',	/* purple-rain-81 */
    // 'oklch(10.0% 0.10 298.0)',	/* purple-rain-90 */
    // 'oklch(95.0% 0.10 309.0)',	/* pleasant-purple-5 */
    // 'oklch(85.6% 0.10 309.0)',	/* pleasant-purple-14 */
    'oklch(76.1% 0.10 309.0)',	/* pleasant-purple-24 */
    // 'oklch(66.7% 0.12 309.0)',	/* pleasant-purple-33 */
    // 'oklch(57.2% 0.16 309.0)',	/* pleasant-purple-43 */
    // 'oklch(47.8% 0.20 309.0)',	/* pleasant-purple-52 */
    // 'oklch(38.3% 0.16 309.0)',	/* pleasant-purple-62 */
    // 'oklch(28.9% 0.12 309.0)',	/* pleasant-purple-71 */
    // 'oklch(19.4% 0.10 309.0)',	/* pleasant-purple-81 */
    // 'oklch(10.0% 0.10 309.0)',	/* pleasant-purple-90 */
    // 'oklch(95.0% 0.10 319.0)',	/* pleasant-purple-5 */
    // 'oklch(85.6% 0.10 319.0)',	/* pleasant-purple-14 */
    'oklch(76.1% 0.10 319.0)',	/* pleasant-purple-24 */
    // 'oklch(66.7% 0.12 319.0)',	/* pleasant-purple-33 */
    // 'oklch(57.2% 0.16 319.0)',	/* pleasant-purple-43 */
    // 'oklch(47.8% 0.20 319.0)',	/* pleasant-purple-52 */
    // 'oklch(38.3% 0.16 319.0)',	/* pleasant-purple-62 */
    // 'oklch(28.9% 0.12 319.0)',	/* pleasant-purple-71 */
    // 'oklch(19.4% 0.10 319.0)',	/* pleasant-purple-81 */
    // 'oklch(10.0% 0.10 319.0)',	/* pleasant-purple-90 */
    // 'oklch(95.0% 0.10 329.0)',	/* acai-juice-5 */
    // 'oklch(85.6% 0.10 329.0)',	/* acai-juice-14 */
    'oklch(76.1% 0.10 329.0)',	/* acai-juice-24 */
    // 'oklch(66.7% 0.12 329.0)',	/* acai-juice-33 */
    // 'oklch(57.2% 0.16 329.0)',	/* acai-juice-43 */
    // 'oklch(47.8% 0.20 329.0)',	/* acai-juice-52 */
    // 'oklch(38.3% 0.16 329.0)',	/* acai-juice-62 */
    // 'oklch(28.9% 0.12 329.0)',	/* acai-juice-71 */
    // 'oklch(19.4% 0.10 329.0)',	/* acai-juice-81 */
    // 'oklch(10.0% 0.10 329.0)',	/* acai-juice-90 */
    // 'oklch(95.0% 0.10 339.0)',	/* magneto’s-magenta-5 */
    // 'oklch(85.6% 0.10 339.0)',	/* magneto’s-magenta-14 */
    'oklch(76.1% 0.10 339.0)',	/* magneto’s-magenta-24 */
    // 'oklch(66.7% 0.12 339.0)',	/* magneto’s-magenta-33 */
    // 'oklch(57.2% 0.16 339.0)',	/* magneto’s-magenta-43 */
    // 'oklch(47.8% 0.20 339.0)',	/* magneto’s-magenta-52 */
    // 'oklch(38.3% 0.16 339.0)',	/* magneto’s-magenta-62 */
    // 'oklch(28.9% 0.12 339.0)',	/* magneto’s-magenta-71 */
    // 'oklch(19.4% 0.10 339.0)',	/* magneto’s-magenta-81 */
    // 'oklch(10.0% 0.10 339.0)',	/* magneto’s-magenta-90 */
    // 'oklch(95.0% 0.10 350.0)',	/* fabric-of-love-5 */
    // 'oklch(85.6% 0.10 350.0)',	/* fabric-of-love-14 */
    'oklch(76.1% 0.10 350.0)',	/* fabric-of-love-24 */
    // 'oklch(66.7% 0.12 350.0)',	/* fabric-of-love-33 */
    // 'oklch(57.2% 0.16 350.0)',	/* fabric-of-love-43 */
    // 'oklch(47.8% 0.20 350.0)',	/* fabric-of-love-52 */
    // 'oklch(38.3% 0.16 350.0)',	/* fabric-of-love-62 */
    // 'oklch(28.9% 0.12 350.0)',	/* fabric-of-love-71 */
    // 'oklch(19.4% 0.10 350.0)',	/* fabric-of-love-81 */
    // 'oklch(10.0% 0.10 350.0)',	/* fabric-of-love-90 */
    // 'oklch(95.0% 0.10 360.0)',	/* aztec-warrior-5 */
    // 'oklch(85.6% 0.10 360.0)',	/* aztec-warrior-14 */
    'oklch(76.1% 0.10 360.0)',	/* aztec-warrior-24 */
    // 'oklch(66.7% 0.12 360.0)',	/* aztec-warrior-33 */
    // 'oklch(57.2% 0.16 360.0)',	/* aztec-warrior-43 */
    // 'oklch(47.8% 0.20 360.0)',	/* aztec-warrior-52 */
    // 'oklch(38.3% 0.16 360.0)',	/* aztec-warrior-62 */
    // 'oklch(28.9% 0.12 360.0)',	/* aztec-warrior-71 */
    // 'oklch(19.4% 0.10 360.0)',	/* aztec-warrior-81 */
    // 'oklch(10.0% 0.10 360.0)',	/* aztec-warrior-90 */
];

function adjustLightness(color, lightnessDelta) {
    // Парсинг OKLCH цвета
    // Как он экспортируется из Figma: oklch(70% 0.16 29)
    const [l, c, h] = color.match(/\d+(\.\d+)?/g).map(Number);

    // Корректировка lightness с ограничениями
    const newL = Math.max(0, Math.min(100, l + lightnessDelta * 100));
    
    return `oklch(${newL}% ${c} ${h})`;
}

export function generateUserAvatar(user: Partial<User>): User {
    // Генерируем id если не передан
    const userId = user.id || crypto.randomUUID();
    
    const baseColor = baseColors[Math.floor(Math.random() * baseColors.length)];

    // Генерация цветов для light и dark режимов
    const lightAvatar: AvatarStyles = {
        color: adjustLightness(baseColor, -0.3),
        background: adjustLightness(baseColor, 0)
    };

    const darkAvatar: AvatarStyles = {
        color: adjustLightness(baseColor, 0),
        background: adjustLightness(baseColor, -0.4)
    };

    return {
        id: userId,
        name: user.name || 'Anonymous',
        avatar: {
            light: lightAvatar,
            dark: darkAvatar
        }
    };
}