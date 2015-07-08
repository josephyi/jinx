class SummonerController < ApplicationController
  def show
    region = params[:region]
    summoner_name = params[:summoner_name].gsub(' '.freeze, ''.freeze).downcase

    @profile = SummonerService.profile(summoner_name: summoner_name, region: region)
  end
end