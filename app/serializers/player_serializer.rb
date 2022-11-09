class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :player_name, :position, :passing_attempts, :passing_completions, :passing_touchdowns, :passing_yards, :interceptions, :rushing_yards, :rushing_touchdowns, :receptions, :receiving_yards, :receiving_touchdowns

belongs_to :team
end
