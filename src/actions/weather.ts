"use server";

import { XMLParser } from "fast-xml-parser";

/** 都市コードのxmlファイルを参照し、都市コードのオブジェクトを返す */
export async function getCityCode() {
	const url = "https://weather.tsukumijima.net/primary_area.xml";

	const xmlData = await fetch(url).then((res) => res.text());
	const parser = new XMLParser({ ignoreAttributes: false });
	const parsedObj = parser.parse(xmlData);
	const prefData = parsedObj?.rss?.channel?.["ldWeather:source"].pref as {
		"@_title": string;
		city:
			| { "@_title": string; "@_id": string }
			| { "@_title": string; "@_id": string }[];
	}[];
	return prefData.map((item) => ({
		title: item["@_title"],
		city: Array.isArray(item.city)
			? item.city.map((city) => ({ id: city["@_id"], title: city["@_title"] }))
			: [{ id: item.city["@_id"], title: item.city["@_title"] }],
	}));
}
/** 都市コードから天気情報を取得する */
export async function getWeather(cityCode: string) {
	const baseUrl = "https://weather.tsukumijima.net/api/forecast";
	const parameter = new URLSearchParams({ city: cityCode });
	const url = `${baseUrl}?${parameter.toString()}`;
	return (await fetch(url).then((res) => res.json())) as Weather;
}
