class SummonerService
  def self.profile(summoner_name: , region: )
    client = Taric.client(region: region)
    summoner_names = client.summoners_by_names(summoner_names: summoner_name)
    summoner = summoner_names[summoner_name]

    responses = client.in_parallel.summary_stats(summoner_id: summoner['id']).ranked_stats(summoner_id: summoner['id']).execute!
    profile_hash = {}
    add_summoner_stats!(responses[0], profile_hash)

    profile_hash
  end

  private

  def self.add_summoner_stats!(response:, hash: )
    response[:body]['playerStatSummaries'].each do |summary|
      hash.merge!(
          "#{summary['playerStatSummary']}_wins" => summary['wins'],
          "#{summary['playerStatSummary']}_aggregatedStats" => summary['aggregatedStats']
      )
    end
  end
end