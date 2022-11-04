class PlayersController < ApplicationController
    def index
        render json: Player.all , status: :ok
    end

    def create
        player = Player.create!(player_params)
        render json: player, status: :created
    end

    def show 
        player = find_player
        render json: player, status: :ok
    end

    def update
        player = find_player
        player.update!(player_params)
        render json: player, status: :ok
    end

    def destroy
        player = find_player
        player.destroy
        head :no_content
    end


private

    def player_params
        params.permit(:team_id, :position, :passing_yards, :passing_touchdowns, :interceptions, :passing_attempts, :passing_completions, :rushing_yards, :rushing_touchdowns, :receptions, :receiving_yards, :receiving_touchdowns)
    end

    def find_player
        Player.find(params[:id])
    end

end
