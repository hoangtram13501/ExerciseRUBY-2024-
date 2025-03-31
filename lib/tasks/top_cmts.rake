namespace :posts do
  desc "List top 10 posts with the most comments"
  task top_10_most_commented: :environment do
    top_posts = Post.joins(:comments)
                    .group('posts.id')
                    .order('COUNT(comments.id) DESC')
                    .limit(10)
                    .select('posts.*, COUNT(comments.id) AS comments_count')

    puts "Top 10 Posts with the Most Comments:"
    puts "-----------------------------------"

    top_posts.each_with_index do |post, index|
      puts "#{index + 1}. Post ID: #{post.id}, Comments Count: #{post.comments_count}"
    end
  end

  desc "Export top 10 posts with the most comments to CSV"
  task export_top_10_most_commented_to_csv: :environment do
    require 'csv'

    top_posts = Post.joins(:comments)
                    .group('posts.id')
                    .order('COUNT(comments.id) DESC')
                    .limit(10)
                    .select('posts.*, COUNT(comments.id) AS comments_count')

    csv_file = "top_posts_with_comments.csv"

    CSV.open(csv_file, "wb") do |csv|
      csv << ["Post ID", "Comments Count"]

      top_posts.each do |post|
        csv << [post.id, post.comments_count]
      end
    end

    puts "CSV file exported: #{csv_file}"
  end
end
