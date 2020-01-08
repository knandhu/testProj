class RemAddIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index "questions", name: "index_questions_on_owner_id"
    add_index :questions, :owner_id
  end
end
