import BlackListRefreshTokenModel from "../models/BlackListRefreshTokenModel";

export default class BlackListReFreshTokenServices {
  static BlacklistToken = async (
    refresh_token: string,
    expirationDate: Date
  ) => {
    await BlackListRefreshTokenModel.create({
      refresh_token,
      expiresAt: expirationDate,
    });
  };
}
