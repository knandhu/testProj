
json.array! @questions do |ques|
    json.extract! ques , :id, :title, :body, :owner_id
end