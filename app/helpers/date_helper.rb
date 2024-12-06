module DateHelper
    extend self
    include ActionView::Helpers::DateHelper

    def formatted_time_in_words(from_time, to_time = Time.now)
        distance_of_time_in_words(from_time, to_time)
    end
end
