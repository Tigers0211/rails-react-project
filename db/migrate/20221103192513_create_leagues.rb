class CreateLeagues < ActiveRecord::Migration[7.0]
  def change
    create_table :leagues do |t|
      t.string :league_name
      t.string :commisioner_name
      t.timestamps
    end
  end
end
