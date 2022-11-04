class League < ApplicationRecord
    has_many :teams
    has_many :users, through: :teams

    validates :league_name, uniqueness: true
end
