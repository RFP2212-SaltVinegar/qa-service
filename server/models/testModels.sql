SELECT json_build_object(
  'product_id', 20,
  'results', (
    WITH questionRows AS (
      SELECT * FROM questions
      WHERE product_id = 20
      AND reported = false
      LIMIT 4 OFFSET 1
      )
    SELECT COALESCE(json_agg(json_build_object(
      'question_id', id,
      'question_body', body,
      'question_date', date_added,
      'asker_name', asker,
      'question_helpfulness', helpful,
      'reported', reported,
      'answers', (
        WITH answerRows AS (
          SELECT * FROM answers
          WHERE question_id = questionRows.id
          AND reported = false
          )
        SELECT COALESCE(json_object_agg(
          id, json_build_object(
            'id', id,
            'body', body,
            'date', date_added,
            'answerer_name', answerer,
            'helpfulness', helpful,
            'photos', (
              WITH photoRows AS (
                SELECT * FROM answer_photos
                WHERE answer_id = answerRows.id
                )
              SELECT COALESCE(json_agg(url), '[]'::json) FROM photoRows
            )
          )
        ), '{}'::json) FROM answerRows
      )
    )), '[]'::json) FROM questionRows
  )
);