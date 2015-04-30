require 'typhoeus/adapters/faraday'

Taric.configure! do |config|
  config.api_key = ENV['RIOT_API_KEY']
  config.adapter = :typhoeus
end