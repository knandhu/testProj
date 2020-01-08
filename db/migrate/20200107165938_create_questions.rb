class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.string :body, null:false
      t.integer :owner_id, null:false
      t.timestamps
    end
    add_index :questions, :title, unique:true
    add_index :questions, :owner_id, unique: true
  end
end
