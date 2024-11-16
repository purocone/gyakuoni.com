import { format } from "date-fns";

type Props = {
	weatherData: Weather;
};
/** 天気APIからのデータを表示するためのテーブル */
export default function WeatherTable({ weatherData }: Props) {
	return (
		<table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-40">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py3">
						日付
					</th>
					<th scope="col" className="px-6 py3">
						天気
					</th>
				</tr>
			</thead>
			<tbody>
				{weatherData?.forecasts?.map((item) => (
					<tr
						key={item.date}
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-900 whitespace-nowrap dark:text-white"
					>
						<td className="px-6 py3 ">
							{format(new Date(item.date), "yyyy年MM月dd日")}
						</td>
						<td className="px-6 py3">{item.telop}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
