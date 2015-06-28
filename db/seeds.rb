users = [
  User.create(first_name: "Val", last_name: "Mauro"),
  User.create(first_name: "Ruben", last_name: "Bohannon"),
  User.create(first_name: "Terrence", last_name: "Eckhart"),
  User.create(first_name: "Stan", last_name: "Slocum"),
  User.create(first_name: "Joan", last_name: "Peszynski")
]

categories = []

6.times do |i|
 categories.push Category.create(title: "Category ##{i}", subtitle: "Category ##{i} subtitle")
end

50.times do |i|
  event = Event.create({
    title: "Project ##{i}",
    subheading: "Subheading",
    thumb: 'http://placeimg.com/700/300/any',
    start_at: DateTime.new(2015,9,1),
    summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
    full_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  })

  categories.sample.events << event
  users.sample.events << event
  users.sample.events << event
end
