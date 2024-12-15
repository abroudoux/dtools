export async function getLastRealeaseVersion(repositoryName: string): Promise<string | Error> {
	try {
		const urlRequest: string = `https://api.github.com/repos/abroudoux/${repositoryName}/releases/latest`;
		const response = await fetch(urlRequest);

		if (!response.ok) {
			return new Error(`Error fetching latest release version: ${response.statusText}`);
		}

		const version: string = (await response.json()).tag_name;
		return version;
	} catch (error: any) {
		return new Error("Error fetching latest release version", error);
	}
}
