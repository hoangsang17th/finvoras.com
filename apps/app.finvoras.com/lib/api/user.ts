import { UserProfile } from "@/lib/types";
import { apiClient } from "./auth";

export class UserApi {
	private client = apiClient.getHttpClient();

	async getProfile(): Promise<UserProfile> {
		const response = await this.client.get<UserProfile>("/auth/me");
		return response.data;
	}
}

export const userApi = new UserApi();
