json.(@event, :id, :title, :subheading, :full_text, :thumb, :start_at)
json.users @event.users, :id, :first_name, :last_name
