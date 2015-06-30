class Event < ActiveRecord::Base
  validates :title, presence: true

  has_and_belongs_to_many :users, -> { uniq }
  belongs_to :category
end
