json.array! @events do |event|
  json.id event.id
  json.title event.title
  json.subheading event.subheading
  json.summary event.summary
  json.thumb event.thumb
  json.startAt event.start_at

  json.users event.users do |user|
    json.id user.id
    json.firstName user.first_name
    json.lastName user.last_name
  end
end
