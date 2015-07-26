desc "Dump HTML for all test grammars"
task :test do
  Dir['grammars/*.rb'].each do |g|
    cmd = "ruby #{g} > #{g.sub('grammars/', 'html/').sub('.rb', '.html')}"
    begin
      sh cmd
    rescue
      $stderr.puts "WARNING: Command failed `#{cmd}`"
    end
  end
end
