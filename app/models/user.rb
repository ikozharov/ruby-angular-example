class User < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_and_belongs_to_many :events
end
