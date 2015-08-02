desc "Generate HTML for all grammars"
task :html do
  Dir['grammars/*.rb'].each do |g|
    cmd = "ruby ./bin/bottoms-up --debug #{g.sub('grammars/', 'debug/').sub('.rb', '.txt')} --html #{g.sub('grammars/', 'html/').sub('.rb', '.html')} #{g}"
    begin
      sh cmd
    rescue
      $stderr.puts "WARNING: Command failed `#{cmd}`"
    end
  end
end

desc "Generate JSON tables for all grammars"
task :json do
  Dir['grammars/*.rb'].each do |g|
    cmd = "ruby ./bin/bottoms-up --debug #{g.sub('grammars/', 'debug/').sub('.rb', '.txt')} --json #{g.sub('grammars/', 'json/').sub('.rb', '.json')} #{g}"
    begin
      sh cmd
    rescue
      $stderr.puts "WARNING: Command failed `#{cmd}`"
    end
  end
end

desc "Generate ruby tables for all grammars"
task :tables do
  Dir['grammars/*.rb'].each do |g|
    cmd = "ruby ./bin/bottoms-up --debug #{g.sub('grammars/', 'debug/').sub('.rb', '.txt')} --table #{g.sub('grammars/', 'tables/')} #{g}"
    begin
      sh cmd
    rescue
      $stderr.puts "WARNING: Command failed `#{cmd}`"
    end
  end
end

desc "Generate the sql parse table for Taboo"
task :taboo do
  require 'json'
  require 'erb'
  require_relative './bottoms_up'
  load "grammars/sqlike.rb"
  parse_table = JSON.pretty_generate BottomsUp::Grammar.grammars[:QUERY].dfa.to_a
  tmpl = ERB.new(File.read('templates/parse-table-sql.js.erb'))
  File.open('taboo/appserver/static/parse-table-sql.js', 'w') do |f|
    f.puts tmpl.result(binding)
  end
end
