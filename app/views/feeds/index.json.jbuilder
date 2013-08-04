json.array!(@feeds) do |feed|
  json.extract! feed, :name, :description
  json.url feed_url(feed, format: :json)
end
