class TeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :user_id, :league_id

has_many :players
  
belongs_to :league
end
