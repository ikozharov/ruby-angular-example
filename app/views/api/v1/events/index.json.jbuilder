json.array! @events do |event|
  json.id event.id
  json.title event.title
  json.subheading event.subheading
  json.summary event.summary
  json.thumb event.thumb
  json.start_at event.start_at

  json.users event.users, :id, :first_name, :last_name
end
