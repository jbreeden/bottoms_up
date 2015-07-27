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

desc "Dump HTML for all test grammars"
task :json do
  Dir['grammars/*.rb'].each do |g|
    cmd = "ruby -r ./#{g} -e \"puts \\$parser.dfa.to_json\" > #{g.sub('grammars/', 'json/').sub('.rb', '.json')}"
    begin
      sh cmd
    rescue
      $stderr.puts "WARNING: Command failed `#{cmd}`"
    end
  end
end
