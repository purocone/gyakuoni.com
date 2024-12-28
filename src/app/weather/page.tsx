import { getCityCode, getWeather } from "@/actions/weather";
import CitySelect from "@/components/weather/CitySelect";
import WeatherTable from "@/components/weather/WeatherTable";

export default async function Page({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) {
	const cd = await getCityCode();
	const cityCode = searchParams.city;
	const data = await getWeather(cityCode);
	return (
		<div>
			<div className="p-3">
				<CitySelect cityCode={cd} />
			</div>
			<div className="p-3">
				<WeatherTable weatherData={data} />
			</div>
		</div>
	);
}
