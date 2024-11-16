"use client";
import { redirect, useRouter } from "next/navigation";

type Props = {
	cityCode: CityCode[];
};
export default function CitySelect({ cityCode }: Props) {
	const router = useRouter();
	return (
		<div className="flex">
			<select
				id="countries"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				onChange={(e) => {
					router.push(`?city=${e.target.value}`);
				}}
			>
				{cityCode.map((pref, index) => (
					<optgroup key={`${index}-${pref}`} label={pref.title}>
						{pref.city.map((city) => (
							<option key={city.id} value={city.id}>
								{city.title}
							</option>
						))}
					</optgroup>
				))}
			</select>
			<span className="p-3">の天気</span>
		</div>
	);
}
