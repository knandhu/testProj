class Api::QuestionsController < ApplicationController
    def index
        @questions = Question.all
    end

    def show
        @question = Question.find(params[:id])
    end

    def create 
        @question = Question.create(question_params)
        if @question.save!
            render 'api/questions/show'
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def update

    end

    def delete
    end

    private
    def question_params
        params.require(:question).permit(:id, :title, :body, :owner_id) 
    end
end
