class TeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :user_id, :league_id

  belongs_to :user
  belongs_to :league
end
