class Category < ActiveRecord::Base
  validates :title, presence: true
  has_many :events
  has_many :children, class_name: "Category", foreign_key: "parent_id"
end
