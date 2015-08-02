desc "Dump HTML for all test grammars"
task :html do
  Dir['grammars/*.rb'].each do |g|
    cmd = "ruby -r ./#{g} -e \"\\$parser.dump_html\" > #{g.sub('grammars/', 'html/').sub('.rb', '.html')}"
    begin
      sh cmd
    rescue
      $stderr.puts "WARNING: Command failed `#{cmd}`"
    end
  end
end

desc "Dump JSON for all test grammars"
task :json do
  Dir['grammars/*.rb'].each do |g|
    cmd = "ruby -r json -r ./#{g} -e \"puts JSON.pretty_generate(\\$parser.dfa.to_a)\" > #{g.sub('grammars/', 'json/').sub('.rb', '.json')}"
    begin
      sh cmd
    rescue
      $stderr.puts "WARNING: Command failed `#{cmd}`"
    end
  end
end

desc "Dump tables for all test grammars"
task :tables do
  Dir['grammars/*.rb'].each do |g|
    cmd = "ruby -r pp -r ./#{g} -e \"pp \\$parser.dfa.to_a\" > #{g.sub('grammars/', 'tables/')}"
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
  load "grammars/sqlike.rb"
  parse_table = JSON.pretty_generate $parser.dfa.to_a
  tmpl = ERB.new(File.read('templates/parse-table-sql.js.erb'))
  File.open('taboo/appserver/static/parse-table-sql.js', 'w') do |f|
    f.puts tmpl.result(binding)
  end
end
