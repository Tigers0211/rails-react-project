class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.integer :team_id
      t.string :position
      t.integer :passing_yards
      t.integer :passing_touchdowns
      t.integer :interceptions
      t.integer :passing_attempts
      t.integer :passing_completions
      t.integer :rushing_yards
      t.integer :rushing_touchdowns
      t.integer :receptions
      t.integer :receiving_yards
      t.integer :receiving_touchdowns
      t.timestamps
    end
  end
end
